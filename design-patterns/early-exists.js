function transformData(data) {
    if (!data) {
        return []
    }

    // check for specific cases
    if (data.length ==1) {
        return []
    }

    return data.map(item => item)
}