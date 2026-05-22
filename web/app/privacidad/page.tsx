import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y protección de datos de Ticonomía.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full flex-1 flex flex-col gap-8 max-w-3xl mx-auto py-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Política de Privacidad</h1>
        <p className="text-sm text-muted-foreground">Última revisión: 15 mayo 2026</p>
      </div>

      <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
        <p className="leading-relaxed">
          Bienvenido a la política de privacidad de www.ticonomia.com. Esta política le ayudará a entender qué datos recogemos, por qué los recogemos y qué derechos tiene usted al respecto.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Resumen</h2>
          <p className="leading-relaxed">
            Recogemos datos sobre usted automáticamente, por ejemplo, cuando visita www.ticonomia.com.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Rastreadores</li>
            <li>Datos de uso</li>
            <li>Cantidad de usuarios</li>
            <li>Estadísticas de sesión</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-4">Terceros de confianza nos ayudan a tratarlos</h3>
          <p className="leading-relaxed">Cómo los usamos:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Estadísticas</li>
            <li>Hosting e infraestructura de backend</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Titular y Responsable del tratamiento de los Datos</h2>
          <p className="leading-relaxed">
            Correo electrónico de contacto del Titular: <strong>ticonomia@proton.me</strong>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tipos de Datos que recogemos</h2>
          <p className="leading-relaxed">
            Entre las clases de Datos Personales que recoge esta Aplicación, ya sea directamente o a través de terceros, se encuentran: Rastreadores, Datos de uso, cantidad de usuarios y estadísticas de sesión.
          </p>
          <p className="leading-relaxed">
            Los Datos Personales podrán ser proporcionados libremente por el Usuario o, en caso de los Datos de Uso, serán recogidos automáticamente cuando se utilice esta Aplicación. Salvo que se indique lo contrario, todos los Datos solicitados por esta Aplicación son obligatorios y la negativa a proporcionarlos podrá imposibilitar que esta Aplicación pueda proceder a la prestación de sus servicios.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Modalidades y lugar del tratamiento</h2>
          
          <h3 className="text-xl font-medium mt-4">Modalidades de Tratamiento</h3>
          <p className="leading-relaxed">
            El Titular tratará los Datos de los Usuarios de manera adecuada y adoptará las medidas de seguridad apropiadas para impedir el acceso, la revelación, alteración o destrucción no autorizados de los Datos.
          </p>

          <h3 className="text-xl font-medium mt-4">Lugar</h3>
          <p className="leading-relaxed">
            Los Datos se tratan en las oficinas del Titular, así como en cualquier otro lugar en el que se encuentren situadas las partes implicadas en dicho proceso de tratamiento. Dependiendo de la localización de los Usuarios, las transferencias de Datos pueden implicar la transferencia de los Datos de los Usuarios a otro país diferente al suyo propio.
          </p>

          <h3 className="text-xl font-medium mt-4">Período de conservación</h3>
          <p className="leading-relaxed">
            Salvo que se indique lo contrario en el presente documento, los Datos Personales serán tratados y conservados durante el tiempo necesario y para la finalidad por la que han sido recogidos y podrán conservarse durante más tiempo debido a una obligación legal pertinente o sobre la base del consentimiento de los Usuarios.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Finalidad del Tratamiento de los Datos</h2>
          <p className="leading-relaxed">
            Los Datos relativos al Usuario son recogidos para permitir al Titular prestar su Servicio, cumplir sus obligaciones legales, responder a solicitudes de ejecución, proteger sus derechos e intereses, detectar cualquier actividad maliciosa o fraudulenta, así como para las siguientes finalidades: Estadísticas y Hosting e infraestructura de backend.
          </p>

          <div className="bg-muted/50 p-4 rounded-lg mt-4 space-y-2">
            <h4 className="font-semibold text-lg">Estadísticas: Google Analytics 4</h4>
            <p className="text-sm">
              Google Analytics 4 es un servicio de análisis web prestado por Google Ireland Limited (“Google”). Google utiliza los Datos recogidos para rastrear y examinar el uso de esta Aplicación, para preparar informes de sus actividades y compartirlos con otros servicios de Google.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Datos Personales tratados: cantidad de usuarios, Datos de uso, estadísticas de sesión, Rastreadores.</li>
              <li>Lugar de tratamiento: Irlanda</li>
            </ul>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg mt-4 space-y-2">
            <h4 className="font-semibold text-lg">Hosting e infraestructura de backend: Vercel</h4>
            <p className="text-sm">
              Vercel es un servicio de hosting y backend prestado por Vercel Inc.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Datos Personales tratados: Datos de uso y distintas clases de Datos.</li>
              <li>Lugar de tratamiento: EE.UU.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Los derechos de los Usuarios</h2>
          <p className="leading-relaxed">
            Los Usuarios podrán ejercer ciertos derechos en relación con sus Datos que sean tratados por el Titular. En particular, los Usuarios tienen derecho a hacer lo siguiente:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Retirar su consentimiento en cualquier momento.</li>
            <li>Oposición al tratamiento de sus Datos.</li>
            <li>Acceso a sus Datos.</li>
            <li>Verificar y solicitar la rectificación.</li>
            <li>Limitar el tratamiento de sus Datos.</li>
            <li>Borrar o eliminar los Datos Personales.</li>
            <li>Recibir sus Datos y transferirlos a otro responsable.</li>
            <li>Presentar una reclamación.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Definiciones y referencias legales</h2>
          <div className="space-y-3">
            <div>
              <strong className="block text-foreground">Datos Personales (o Datos)</strong>
              <span className="text-sm">Constituye un dato personal cualquier información que permita identificar a una persona física.</span>
            </div>
            <div>
              <strong className="block text-foreground">Datos de Uso</strong>
              <span className="text-sm">Las informaciones recogidas de forma automática por esta Aplicación (o por servicios de terceros utilizados por esta Aplicación).</span>
            </div>
            <div>
              <strong className="block text-foreground">Usuario</strong>
              <span className="text-sm">El individuo que utilice esta Aplicación.</span>
            </div>
            <div>
              <strong className="block text-foreground">Responsable del Tratamiento (o Titular)</strong>
              <span className="text-sm">La persona física o jurídica que determine las finalidades y las medidas del tratamiento de los Datos Personales.</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
