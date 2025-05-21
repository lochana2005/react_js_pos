import { Link } from "react-router-dom";

const DefaultTable = () => {
  return (
    <div className='col-lg-6'>
      <div className='card h-100'>
        <div className='card-header'>
          <h5 className='card-title mb-0'>Default Table</h5>
        </div>
        <div className='card-body'>
          <div className='table-responsive'>
            <table className='table basic-table mb-0'>
              <thead>
                <tr>
                  <th>S.L</th>
                  <th>Invoice</th>
                  <th>Name</th>
                  <th>Issued Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>
                    <Link to='#' className='text-primary-600'>
                      #526534
                    </Link>
                  </td>
                  <td>Kathryn Murphy</td>
                  <td>25 Jan 2024</td>
                  <td>$200.00</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>
                    <Link to='#' className='text-primary-600'>
                      #696589
                    </Link>
                  </td>
                  <td>Annette Black</td>
                  <td>25 Jan 2024</td>
                  <td>$200.00</td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>
                    <Link to='#' className='text-primary-600'>
                      #256584
                    </Link>
                  </td>
                  <td>Ronald Richards</td>
                  <td>10 Feb 2024</td>
                  <td>$200.00</td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>
                    <Link to='#' className='text-primary-600'>
                      #526587
                    </Link>
                  </td>
                  <td>Eleanor Pena</td>
                  <td>10 Feb 2024</td>
                  <td>$150.00</td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>
                    <Link to='#' className='text-primary-600'>
                      #105986
                    </Link>
                  </td>
                  <td>Leslie Alexander</td>
                  <td>15 Mar 2024</td>
                  <td>$150.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* card end */}
    </div>
  );
};

export default DefaultTable;
