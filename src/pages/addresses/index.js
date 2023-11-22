import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./addresses.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddresses } from "../../redux/reducers/addressSlice";

const Addresses = () => {
  const dispatch = useDispatch();
  const { addresses } = useSelector((state) => state?.address);
  const { balance } = useSelector((state) => state?.balance);


  useEffect(() => {
    if (addresses.length === 0) {
      dispatch(fetchAddresses());
    }
  }, [dispatch, addresses]);

  const addressesArray = [balance[0]?.address].concat(addresses);

  return (
    <div className='Address-container'>
      <h1>Addresses</h1>
      <div className='Address-list'>
        {addressesArray?.map((item, index) => (
          <ul className='Address-list-item'>
            <li key={index} className='list-inline-item'>
              <Link
                to={`/transfer/${item}`}
                className={`Address-link ${index === 0 ? "Disable-link" : ""}`}
              >
                {item}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Addresses;
