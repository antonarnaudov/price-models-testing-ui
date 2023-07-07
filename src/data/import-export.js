export function importFile(event) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
        const jsonData = JSON.parse(event.target.result.toString());

        // Iterate over the data
        Object.entries(jsonData).forEach(([key, value]) => {
            // Perform operations with each item
            localStorage.setItem(key.toString(), JSON.stringify(value))
        });
    };

    reader.readAsText(file);
    window.location.reload()
}

export function exportData() {
    let data = {}
    Object.entries(localStorage).forEach(([key, value]) => data[key] = JSON.parse(value))

    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(data))}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
}