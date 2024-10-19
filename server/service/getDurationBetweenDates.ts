export function getDurationBetweenDates(startDate: Date, endDate: Date) {
    // Calculate the difference in years and months
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    const startDay = startDate.getDate();
    const endDay = endDate.getDate();

    // Adjust months and years if the end day is before the start day in the same month
    if (endDay < startDay) {
        months--;
        // Adjust years if necessary
        if (months < 0) {
            years--;
            months += 12;
        }
    }

    // Adjust for cases where the month difference is negative
    if (months < 0) {
        years--;
        months += 12;
    }

    const yearsString = years ? `${years}yr${years > 1 ? "s": ""}` : ""
    const monthsString = months ? `${months} mth${months > 1 ? "s": ""}` : ""
    const yearMonthDuration = [yearsString, monthsString].join(' ');
    return `${Math.round((years + months/12)*100)/100}yrs.`
}
