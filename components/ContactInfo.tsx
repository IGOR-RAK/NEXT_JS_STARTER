import { contactType } from "../types";
import { FC } from "react";

type contactInfoProps = {
  contact: contactType,
}

const ContactInfo:FC<contactInfoProps> = ({ contact }) => {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode} = address || {};

  if (!contact) {
    return <h3>Empty contact</h3>
  }

  return (
    <div>
      <h3>{name}</h3>
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      <div>
        <strong>Address: </strong>
        {`${street}, ${suite}, ${city}, ${zipcode}`}
      </div>
    </div>
  );
}

export default ContactInfo; 