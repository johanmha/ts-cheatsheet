function calculateTax(income: number, taxYear: number = 2022) {
    if (taxYear < 2022)
        return income * 1.2
    return income * 1.3;
}

calculateTax(10_000, 2023)
