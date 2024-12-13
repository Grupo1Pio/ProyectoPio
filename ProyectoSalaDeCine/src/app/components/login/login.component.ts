import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Opcional: si tienes estilos para el componente
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginMensaje: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  async onSubmit(): Promise<void> {
    try {
      // Realizar la solicitud POST a la API de inicio de sesión
      const response: any = await this.http.post('http://localhost:3000/api/auth/login', {
        username: this.username,
        password: this.password
      }).toPromise();

      // Guardar el token JWT en localStorage
      localStorage.setItem('token', response.token);
      this.loginMensaje = 'Inicio de sesión exitoso.';

      // Redirigir al home después de un pequeño retraso
      setTimeout(() => {
        this.router.navigate(['../homesesion/homesesion.html']);
      }, 1500); // 1.5 segundos de retraso
    } catch (error: any) {
      if (error.status === 401) {
        this.loginMensaje = 'Nombre de usuario o contraseña incorrectos.';
      } else {
        this.loginMensaje = 'Error al conectar con el servidor. Inténtalo de nuevo más tarde.';
      }
    }
  }
}
