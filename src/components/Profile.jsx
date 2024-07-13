/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function Profile({ data }) {
  console.log(data);

  const { name, img, email, phone } = data;
  
  return (
    <>
      <div className="user-card" style={data.theme}>
        <h1>Name : {name} </h1>
        <img src={img} alt="" />
        <h3>Email : {email} </h3>
        <h4> Phone : {phone} </h4>
      </div>
    </>
  );
}

export default Profile;
