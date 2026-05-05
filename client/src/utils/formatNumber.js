// Format large numbers compactly: 1200 -> "1.2k", 1500000 -> "1.5M".
export const formatNumber = (value = 0) => {
  const n = Number(value) || 0
  if (n < 1000) return String(n)
  if (n < 1000000) return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k`
  return `${(n / 1000000).toFixed(1).replace(/\.0$/, '')}M`
}
