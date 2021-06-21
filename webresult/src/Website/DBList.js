import LoadEnvironment from "../LoadEnvironment"

const DBList = ({dbList,testName,stepName}) =>{
console.log(dbList)

    return(
        <div>
            {dbList.map((element) => (
            <div>
              <LoadEnvironment dbFile={testName+"/"+stepName+"/"+element.name}/>
              
            </div>
          ))}
        </div>
    )
}

export default DBList;