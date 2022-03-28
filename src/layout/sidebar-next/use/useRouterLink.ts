// Adapted from vue-router-next
// See: https://github.com/vuejs/vue-router-next/blob/master/src/RouterLink.ts

export function activeRecordIndex (route:any, currentRoute:any) {
  const { matched } = route
  const { length } = matched
  const routeMatched = matched[length - 1]

  const currentMatched = currentRoute.matched
  if (!routeMatched || !currentMatched.length) return -1
  const index = currentMatched.findIndex(
    isSameRouteRecord.bind(null, routeMatched)
  )
  if (index > -1) return index

  const parentRecordPath = getOriginalPath(
    matched[length - 2]
  )
  return (
    length > 1 &&
    getOriginalPath(routeMatched) === parentRecordPath &&
    currentMatched[currentMatched.length - 1].path !== parentRecordPath
      ? currentMatched.findIndex(
        isSameRouteRecord.bind(null, matched[length - 2])
      )
      : index
  )
}

export function isSameRouteLocationParams (a:any, b:any) {
  if (Object.keys(a).length !== Object.keys(b).length) return false
  for (const key in a) {
    if (!isSameRouteLocationParamsValue(a[key], b[key])) return false
  }
  return true
}

export function includesParams (outer:any, inner:any) {
  for (const key in inner) {
    const innerValue = inner[key]
    const outerValue = outer[key]
    if (typeof innerValue === 'string') {
      if (innerValue !== outerValue) return false
    } else {
      if (
        !Array.isArray(outerValue) ||
        outerValue.length !== innerValue.length ||
        innerValue.some((value:any, i:any) => value !== outerValue[i])
      ) {
        return false
      }
    }
  }
  return true
}

function getOriginalPath (record:any) {
  return record ? (record.aliasOf ? record.aliasOf.path : record.path) : ''
}

function isSameRouteRecord (a:any, b:any) {
  return (a.aliasOf || a) === (b.aliasOf || b)
}

function isSameRouteLocationParamsValue (a:any, b:any) {
  return Array.isArray(a)
    ? isEquivalentArray(a, b)
    : Array.isArray(b)
      ? isEquivalentArray(b, a)
      : a === b
}

function isEquivalentArray (a:any, b:any) {
  return Array.isArray(b)
    ? a.length === b.length && a.every((value:any, i:any) => value === b[i])
    : a.length === 1 && a[0] === b
}
