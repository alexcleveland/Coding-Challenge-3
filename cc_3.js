// Task 1 create a function to calculate Average Sales.

function calculateAverageSales(sales){
    if (sales === 0) return 0;
    const totalSales = sales.reduce((sum, sale)=> sum +sale, 0);
    return totalSales / sales.length;
}
