import { Link } from "react-router-dom";

const BorderedTables = () => {
  return (
    <div className='col-lg-6'>
      <div className='card'>
        <div className='card-header'>
          <h5 className='card-title mb-0'>Bordered Tables</h5>
        </div>
        <div className='card-body'>
          <div className='table-responsive'>
            <table className='table basic-border-table mb-0'>
              <thead>
                <tr>
                  <th>Invoice </th>
                  <th>Name</th>
                  <th>Issued Date</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link to='#' className='text-primary-600'>
                      #526534
                    </Link>
                  </td>
                  <td>Kathryn Murphy</td>
                  <td>25 Jan 2024</td>
                  <td>$200.00</td>
                  <td>
                    <Link to='#' className='text-primary-600'>
                      View More &gt;
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to='#' className='text-primary-600'>
                      #696589
                    </Link>
                  </td>
                  <td>Annette Black</td>
                  <td>25 Jan 2024</td>
                  <td>$200.00</td>
                  <td>
                    <Link to='#' className='text-primary-600'>
                      View More &gt;
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to='#' className='text-primary-600'>
                      #256584
                    </Link>
                  </td>
                  <td>256584</td>
                  <td>10 Feb 2024</td>
                  <td>$200.00</td>
                  <td>
                    <Link to='#' className='text-primary-600'>
                      View More &gt;
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to='#' className='text-primary-600'>
                      #526587
                    </Link>
                  </td>
                  <td>Eleanor Pena</td>
                  <td>10 Feb 2024</td>
                  <td>$150.00</td>
                  <td>
                    <Link to='#' className='text-primary-600'>
                      View More &gt;
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to='#' className='text-primary-600'>
                      #105986
                    </Link>
                  </td>
                  <td>Leslie Alexander</td>
                  <td>15 Mar 2024</td>
                  <td>$150.00</td>
                  <td>
                    <Link to='#' className='text-primary-600'>
                      View More &gt;
                    </Link>
                  </td>
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

export default BorderedTables;
