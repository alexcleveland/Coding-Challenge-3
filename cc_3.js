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
  else
    return ("Needs Improvement");

 }
 // Task 3 create a function to identify top and bottom performers 

 function findTopAndBottomPerformers(sData){
    if (sData.length=== 0)
        return {topPerformer:null , bottomperformer:null};
    const topPerformer =sData.reduce((max, sPerson) =>
        calculateAverageSales(sPerson.sales) > calculateAverageSales(max.sales) ? sPerson : max);
    const bottomperformer = sData.reduce((min, sPerson)=>
        calculateAverageSales(sPerson.sales) <calculateAverageSales(min.sales) ?  sPerson : min);
    return{topPerformer, bottomperformer};
 }

 // Task 4 combine to generate performace report
  function generatePerformanceReport(sData){
    const report = sData.map(sPerson =>{
        const averageSales = calculateAverageSales(sPerson.sales);
        const rating = determinePerformanceRating(averageSales);
        return{name: sPerson.name, averageSales, rating};
  });
  const { topPerformer, bottomperformer}= findTopAndBottomPerformers(sData);
  return{
    report,
    topPerformer: topPerformer ? topPerformer.name :null,
    bottomperformer: bottomperformer? bottomperformer.name : null
  };
  }
  
  
    