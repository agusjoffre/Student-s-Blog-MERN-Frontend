/* eslint-disable jsx-a11y/label-has-associated-control */
export default function LoginPage() {
  return (
    <div className="sign-card" style={{ height: '50vh' }}>
      <h1 className="sign-title">
        Inicia sesion
      </h1>
      <form className="form-sign">
        <label className="label-sign">
          Usuario
          <input name="username" className="input-sign" type="text" placeholder="Usuario" />
        </label>
        <label className="label-sign">
          Contraseña
          <input name="password" className="input-sign" type="password" placeholder="Contraseña" />
        </label>
        <button type="submit" className="btn-alert">Crear cuenta</button>
      </form>
    </div>
  );
}
