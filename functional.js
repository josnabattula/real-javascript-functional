<html>
    <head>

    </head>
    <body>
    
        <!-- Load Babel -->
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <!-- Your custom script here -->
        <script type="text/babel">
            //const compose=(...funs)=>(data)=>funs.reduce((acc,fn)=>fn(acc),data);
            const data=[
                {
                    status:"Done", 
                    link:[{
                        rel:'A',
                        link:"http://A1"
                    },{
                        rel:'P',
                        link:"http://p1"
                    }]
                },
                {
                    status:"Progress", 
                    link:[{
                        rel:'P1',
                        link:"http://p2"
                    },{
                        rel:'F',
                        link:"http://f2"
                    }]
                },
                {
                    status:"Completed", 
                    link:[{
                        rel:'F',
                        link:"http://f3"
                    }]
                }
            ];
            
             const reduceUntilLinkFound=(...funs)=>(list)=>funs.reduce((acc,fn)=> {
                 return acc.length==0?fn(list):acc;
                },[]);
            const onlyWhen=(cond,fn)=>(list)=>cond(list)?fn(list):list;
            const getAlink=fn=>list=>fn(list);
            const getLink1=list=>list.filter(({rel})=>rel==='A');
            const getLink2=list=>list.filter(({rel})=>rel==='P');
            const getLink3=list=>list.filter(({rel})=>rel==='F');

            const getOneOfLinkFromList=reduceUntilLinkFound(getLink1,getLink2,getLink3);
const output= data.map(x=> { 
    return {status:x.status, 
        link:getOneOfLinkFromList(x.link)}
});
          console.log(output);
          
        
        </script>
    </body>
</html>
