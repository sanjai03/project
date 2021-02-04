import { useForm } from "react-hook-form";
import Input from '../components/Input'
import FormRow from '../components/FormRow';

function ContactSubmitForm(){
    const { register, handleSubmit, errors,watch } = useForm();
    const onSubmit = data => console.log(data);
    const watchIntrest = watch("intrest");
    return(
        <form className=" col-6" onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="First Name">
        
        <Input type="text" register={register} validate={{required:true}}  name="first_name"  className={`form-control  + ${errors && errors.first_name && "border-red"}`} placeholder="First Name" />
            {errors && errors.first_name && <p className="text-danger"> First Name is required.</p>}
        </FormRow>
        <FormRow label="Last Name">
        <Input type="text" name="last_name" validate={{required:true}} register={register} className={`form-control  + ${errors && errors.last_name && "border-red"}`} placeholder="Last Name" />
            {errors && errors.last_name && <p className="text-danger"> Last Name is required.</p>}
        </FormRow>
        <FormRow label="Email">
        <Input name="email" type="text" validate={{ required: true, pattern: {value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i} }} register={register} className={`form-control  ${errors && errors.email && "border-red"}`}  placeholder="Email" />
            {errors && errors.email && <p className="text-danger"> Enter the Email correct Format.</p>}
        </FormRow>

        <fieldset className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
            <div className="col-sm-10">
              <div className="form-check">
                <Input register={register} validate={{required:true}}  className="form-check-input" type="radio" name="gender" value="male" checked />
                <label className="form-check-label" for="gridRadios1">
                  Male
              </label>
              </div>
              <div className="form-check">
                <Input register={register} validate={{required:true}}  className="form-check-input" type="radio" name="gender" value="female" />
                <label className="form-check-label" for="gridRadios2">
                  Female
              </label>
                {errors && errors.gender && <p className="text-danger"> Please select the Gender.</p>}
              </div>

            </div>
          </div>
        </fieldset>
        <FormRow label="Intrest">
        <select name="intrest" ref={register({ required: true })} className={`form-control  + ${errors && errors.intrest && "border-red"}`}>
                <option value="">--- Select Intrest---</option>
                <option value="playing">Playing</option>
                <option value="reading">Reading</option>
              </select>
              {errors && errors.intrest && <p className="text-danger"> Select the Intrest.</p>}
        </FormRow>
       
       {watchIntrest=='playing'&&<FormRow label="Favorite Sport" >
       <Input register={register} validate={{required:true}} name="favorite_sport" type="text" className={`form-control  ${errors && errors.favorite_sport && "border-red"}`} placeholder="Favorite Sport" />
            {errors && errors.favorite_sport && <p className="text-danger"> Favorite Sport is Required.</p>}
          </FormRow>}
        {watchIntrest=='reading'&&<FormRow label="Favorite Book">
            <Input register={register} validate={{required:true}} name="favorite_book" type="text" className={`form-control  ${errors && errors.favorite_book && "border-red"}`} placeholder="Favorite Book" />
            {errors && errors.favorite_book && <p className="text-danger"> Favorite Book is Required.</p>}
          </FormRow>}
          <FormRow label="Yourself" >
          <textarea className={`form-control ${errors && errors.intrest && "border-red"}`} ref={register({ required: true })} name="yourself" id="exampleFormControlTextarea1" rows="3"></textarea>
            {errors && errors.yourself && <p className="text-danger"> yourself is required.</p>}
            </FormRow>
        <div className="form-group row">
          <div className="col-5"></div>
          <div className="col-sm-2">
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
        </div>
      </form>
    )
}
export default ContactSubmitForm;