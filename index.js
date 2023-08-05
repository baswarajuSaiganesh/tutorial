const Notification = props => {
  //  Write your code here.
  const {name, imageUrl} = props
  return <div className = `notification ${class}`>
  <img src = {imageUrl}/>
  <p>{name}</p>
  </div>
}

const element = (
  //  Write your code here. 
  <div className = "bg-container">
  <h1>Notification</h1>
  <div>
      <Notification class = "information-class" text = "Information Message" imageUrl = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" />
      <Notification class = "success-class" text = "Success Message" imageUrl = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png" />
      <Notification class = "warning-class" text = "Warning Message" imageUrl = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" />
      <Notification class = "error-class" text = "Error Message" imageUrl = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
  </div>  
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
