export function formatAmount(value)  {
    if (value) {
        const parts = value?.toString().split('.').slice(0, 2)

        parts[0] = parts[0]
            ?.toString()
            .replace(/[^0-9]/g, '')
            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
        if (parts[1]) {
            parts[1] = parts[1]
                ?.toString()
                .replace(/[^0-9]/g, '')
                .slice(0, 2)
        }

        return parts.join('.')
    } else if (value === 0) {
        return `${value}`
    }
}