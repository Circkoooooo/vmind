export const setStorage = (key: string, value: any) => {
	if (typeof value === 'string') {
		localStorage.setItem(key, value)
	} else {
		localStorage.setItem(key, JSON.stringify(value))
	}
}

export const getStorageSync = (key: string) => {
	const storage = localStorage.getItem(key)
	if (!storage) return
	return JSON.parse(storage)
}
