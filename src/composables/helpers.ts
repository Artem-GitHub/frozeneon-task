export function useDebounce (
  callback: (...args: any) => any,
  delay: number = 1000
): (...args: any) => void {
  let timeout: ReturnType<typeof setTimeout>

  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}

export function useDateFormater (date: string): string {
  const dateObject = new Date(date)

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }

  const dateFormatter = new Intl.DateTimeFormat('en-EN', options)

  return dateFormatter.format(dateObject)
}
