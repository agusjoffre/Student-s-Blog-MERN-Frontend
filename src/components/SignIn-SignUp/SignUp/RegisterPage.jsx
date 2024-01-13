/* eslint-disable jsx-a11y/label-has-associated-control */
export default function RegisterPage() {
  return (
    <div className="sign-card">
      <h1 className="sign-title">
        Registrate
      </h1>
      <form className="form-sign">
        <label className="label-sign">
          Usuario
          <input name="username" className="input-sign" type="text" placeholder="Usuario" />
        </label>
        <label className="label-sign">
          Email
          <input name="email" className="input-sign" type="email" placeholder="Email" />
        </label>
        <label className="label-sign">
          Contraseña
          <input name="password" className="input-sign" type="password" placeholder="Contraseña" />
        </label>
        <label className="label-sign">
          Confirmar contraseña
          <input name="confirmPassword" className="input-sign" type="password" placeholder="Confirma tu contraseña" />
        </label>
        <button type="submit" className="btn-alert">Crear cuenta</button>
      </form>
    </div>
  );
}
