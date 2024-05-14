
import { JobApplyColumn } from "@/lib/validators";


interface ProductDetailsProps {
  data : JobApplyColumn
}
const ProductDetails = ({data} : ProductDetailsProps) => {

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
{/*         <div>
          <p className="font-semibold">Title:</p>
          <div>{data.title}</div>
        </div>
        <div>
          <p className="font-semibold">Date:</p>
          <div>{data.date}</div>
        </div>
        <div>
          <p className="font-semibold">Deadline:</p>
          <div>{data.deadline}</div>
        </div>
        <div>
          <p className="font-semibold">Department:</p>
          <div>{data.department?.name}</div>
        </div>
        <div>
          <p className="font-semibold">Organization:</p>
          <div>{data.organization?.name}</div>
        </div>
        <div>
          <p className="font-semibold">Designation:</p>
          <div>{data.designation?.name}</div>
        </div>
        <div>
          <p className="font-semibold">Location:</p>
          <div>{data.location?.name}</div>
        </div>
        <div>
          <p className="font-semibold">Vacancy Requisition:</p>
          <div>{data.vacancy_requisition?.name}</div>
        </div>
        <div>
          <p className="font-semibold">Vacancy Number:</p>
          <div>{data.vacancy_number}</div>
        </div>
        <div>
          <p className="font-semibold">Employment Status:</p>
          <div>{data.employment_status?.name}</div>
        </div>
        <div>
          <p className="font-semibold">Work Place:</p>
          <div>{data.work_place?.name}</div>
        </div>
        <div>
          <p className="font-semibold">Sorting Index:</p>
          <div>{data.sorting_index}</div>
        </div>
        <div> */}
          <p className="font-semibold">Status:</p>
          <div>{data.status}</div>
{/*         </div>
        <div>
          <p className="font-semibold">Responsibilities:</p>
          <div>{data.responsibilities}</div>
        </div>
        <div>
          <p className="font-semibold">Education:</p>
          <div>{data.education}</div>
        </div>
        <div>
          <p className="font-semibold">Experience:</p>
          <div>{data.experience}</div>
        </div>
        <div>
          <p className="font-semibold">Skills:</p>
          <div>{data.skills}</div>
        </div>
        <div>
          <p className="font-semibold">Minimum Age:</p>
          <div>{data.min_age}</div>
        </div>
        <div>
          <p className="font-semibold">Maximum Age:</p>
          <div>{data.max_age}</div>
        </div>
        <div>
          <p className="font-semibold">Minimum Salary:</p>
          <div>{data.min_salary}</div>
        </div>
        <div>
          <p className="font-semibold">Maximum Salary:</p>
          <div>{data.max_salary}</div>
        </div>
        <div>
          <p className="font-semibold">Show Salary:</p>
          <div>{data.show_salary === 1 ? "Yes" : "No"}</div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductDetails;