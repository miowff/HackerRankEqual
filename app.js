function equal(arr) 
{
        
    let min = Math.min(...arr);
    let resultsArray =[];
    while(true)
    {
        let operationsCount = 0;
        for(let i = 0;i<arr.length;i++)
        {
            let num = arr[i];
            if(num === min )
            {
                continue;
            }
         
            let difference = num - min;
            let fiveCount = parseInt(difference/5);
            difference = difference - fiveCount * 5;

            let twoCount = parseInt(difference/2);
            difference = difference - twoCount * 2;
  
            let oneCount = parseInt(difference/1);
            difference = difference - oneCount * 1; 
        
            operationsCount+= fiveCount+twoCount+oneCount;
        }
        resultsArray.push(operationsCount);
        if(min < -5)
        {
            return Math.min(...resultsArray);
        }
        min--;
        
    }
}


