function User(props)
{
  const data={name:"hmani patil" ,email:" vaishnavi@12getDefaultNormalizer.com"}
    return(
        <div>
            <h2>User name:</h2>
            <button onClick={()=>props.ParentAlert(data)}>Click ME</button>
        </div>
    )
}

export default User;