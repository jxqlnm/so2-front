interface TextFieldProps {
  nome: string;
  valor: string;
  setValor: Function;
}

export function TextField(props: TextFieldProps) {
  return (
    <div className="space-x-3">
      <label>{props.nome}</label>
      <br></br>
      <input
        className="bordaInput w-72 h-auto p-1 rounded-md border-2"
        type="text"
        placeholder={props.nome}
        value={props.valor}
        onChange={(e) => props.setValor(e.target.value)}
      />
    </div>
  );
}
