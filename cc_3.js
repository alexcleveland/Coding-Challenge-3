// Task 1 create a function to calculate Average Sales.

function calculateAverageSales(sales){
    if (sales === 0) return 0;
    const totalSales = sales.reduce((sum, sale)=> sum +sale, 0);
    return totalSales / sales.length;
}
// Task 2 Create a function to determine performance rating 

function determinePerformanceRating(averageSales){
    if (averageSales > 10000)
     return "Excellent";
 if (averageSales >= 7000)
     return "Good";
 if (averageSales >= 4000)
     return "Satisfactory";
 if (averageSales > 4000)
 return"Needs Improvement";
 }
 