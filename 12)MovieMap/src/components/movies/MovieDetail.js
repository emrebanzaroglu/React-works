import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";
import {FormGroup,Label,Input} from "reactstrap"

const MovieDetail = ({ categories, movie, onSave, onChange,errors }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{movie.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="movieName"
        label="Movie Name"
        value={movie.movieName}
        onChange={onChange}
        error={errors.movieName}
      />
      <SelectInput
        name="categoryId"
        label="Category"
        value={movie.categoryId || ""}
        defaultOption="Seçiniz"
        options={categories.map(category => ({
          value: category.id,
          text: category.categoryName
        }))}
        onChange={onChange}
        error={errors.categoryId}
      />
        <FormGroup>
          <Label for="rating">Rating</Label>
          <Input type="number" name="rating" id="rating" value={movie.rating} 
                onChange={onChange}
                error={errors.rating} step="0.01"/>
      </FormGroup>
      <button type="submit" className="btn btn-success">
        Kaydet
      </button>
    </form>
  );
};

export default MovieDetail;
