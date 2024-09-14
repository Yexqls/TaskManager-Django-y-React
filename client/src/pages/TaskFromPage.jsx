import { useForm } from "react-hook-form";
import { createTask } from "../api/tasks.api";
import { useNavigate } from "react-router-dom";

export function TaskFromPage() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onsubmit = handleSubmit(async data => {
   const res = await createTask(data);
   navigate('/tasks');
  });

  return (

    < div >
      <form onSubmit={onsubmit}>
        <input
          type="text"
          placeholder="tittle"
          {...register("tittle", { required: true })}
        />
        {errors.tittle && <span>tittle is required</span>}

        <textarea
          rows={3}
          placeholder="Description"
          {...register("description", { required: true })}

        ></textarea>
        {errors.description && <span>description is required</span>}

        <button>Save</button>
      </form>
    </div>
  )
}

