export default function TodoListComponent() {
    const today = new Date();
    const targetDate = new Date(today.getFullYear() , today.getMonth())
    const todolist =[ { id : "1" , description:"learn aws" , status : "pending" , targetDate : targetDate } , 
    { id : "2" , description:"learn java " , status : "pending" ,  targetDate : targetDate}, 
    { id : "3" , description:"learn cloud" , status : "pending" , targetDate:targetDate},
    { id : "4" , description:"learn developer", status:"pending" , targetDate:targetDate},
    { id : "5" , description:"learn developer", status:"pending" , targetDate:targetDate},
    { id : "6" , description:"learn developer", status:"pending" , targetDate:targetDate}]
  
    return <div className="todolist-sec container">
      <h3 style={{marginTop:"20px" , fontWeight:"bold"}}>Things You Want To Do!</h3>
      <div className=" table-responsive-sm">
  
     
      <table className="table table-dark table-striped" style={{marginTop:"20px"}}>
        <thead>
      
          <tr>
          <th>ID</th>
          <th>DESCRIPTION</th>
          <th>STATUS</th>
          <th>TARGET DATE</th>
          </tr>
        
        
        </thead>
        <tbody >
        {
          todolist.map(todo=>(<tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.description}</td>
            <td>{todo.status}</td>
            <td>{todo.targetDate.toString()}</td>
          </tr> ))
        }
        </tbody>
      </table>
      </div>
    </div>;
  }