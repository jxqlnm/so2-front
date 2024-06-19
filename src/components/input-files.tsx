interface InputFileProps {
  files: File[];
  setFiles: Function;
  label: string;
}

export function InputFile(props: InputFileProps) {
  return (
    <>
      <div className="flex-col">
        <label className="form-control w-full ">
          <input
            accept=".png, .jpg, .jpeg, .svg"
            multiple
            name="file"
            id="file"
            onChange={(e) => props.setFiles(e)}
            type="file"
            className="file-input bg-white file-input-sm file-input-bordered w-full "
          />
          <div className="label">
            <span className="label-text-alt">{props.label}</span>
          </div>
        </label>

        <ul>
          {props.files.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
