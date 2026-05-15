import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de cookies y tecnologías de seguimiento de Ticonomía.",
};

export default function CookiesPage() {
  return (
    <div className="w-full flex-1 flex flex-col gap-8 max-w-3xl mx-auto py-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Política de Cookies</h1>
        <p className="text-sm text-muted-foreground">Última revisión: 15 mayo 2026</p>
      </div>

      <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
        <p className="leading-relaxed">
          Bienvenido a la política de cookies de www.ticonomia.com. Esta política le ayudará a entender qué cookies y tecnologías de seguimiento utilizamos, cómo las utilizamos y qué derechos tiene usted al respecto.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Introducción</h2>
          <p className="leading-relaxed">
            El presente documento informa a los Usuarios sobre las tecnologías que ayudan esta Aplicación a lograr los fines descritos a continuación. Dichas tecnologías permiten al Titular acceder a información y almacenarla (por ejemplo, utilizando una Cookie) o emplear recursos (por ejemplo, ejecutando un script) en el dispositivo de un Usuario mientras este interactúa con esta Aplicación.
          </p>
          <p className="leading-relaxed">
            Para simplificar, en el presente documento toda esta clase de tecnologías se define como "Rastreadores", salvo que exista un motivo para diferenciarlas. Por ejemplo, mientras que las Cookies se pueden emplear en navegadores web y móviles, sería inexacto hablar de Cookies en el contexto de las aplicaciones móviles ya que son rastreadores basados en navegadores. Por este motivo, en el presente documento, el término Cookies únicamente se utilizará cuando se emplee específicamente para designar este tipo concreto de Rastreador.
          </p>
          <p className="leading-relaxed">
            Es posible que algunas de las finalidades para las que se utilizan Rastreadores exijan el consentimiento del Usuario. Siempre que se otorgue el consentimiento, este podrá revocarse libremente en cualquier momento.
          </p>
          <p className="leading-relaxed">
            Esta Aplicación utiliza Rastreadores gestionados directamente por el Titular (denominados Rastreadores “de origen") y Rastreadores que hacen posibles servicios prestados por un tercero (denominados Rastreadores “de terceros”). Los plazos de validez y expiración de las Cookies y otros Rastreadores similares pueden variar dependiendo de la duración establecida por el Titular o el proveedor correspondiente.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Titular y Responsable del tratamiento de los Datos</h2>
          <p className="leading-relaxed">
            Correo electrónico de contacto del Titular: <strong>ticonomia@proton.me</strong>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Cómo esta Aplicación utiliza Rastreadores</h2>
          
          <h3 className="text-xl font-medium mt-4">Necesarios</h3>
          <p className="leading-relaxed">
            Esta Aplicación utiliza Cookies denominadas “técnicas” y otros Rastreadores similares para llevar a cabo actividades que son estrictamente necesarias para el funcionamiento o la prestación del Servicio.
          </p>

          <h3 className="text-xl font-medium mt-4">Medición</h3>
          <p className="leading-relaxed">
            Esta Aplicación utiliza Rastreadores para medir el tráfico y analizar el comportamiento de los Usuarios con el fin de mejorar el Servicio.
          </p>

          <div className="bg-muted/50 p-4 rounded-lg mt-4 space-y-2">
            <h4 className="font-semibold text-lg">Google Analytics 4 (Google Ireland Limited)</h4>
            <p className="text-sm">
              Google Analytics 4 es un servicio de análisis web prestado por Google Ireland Limited (“Google”). Google utiliza los Datos recogidos para rastrear y examinar el uso de esta Aplicación, para preparar informes de sus actividades y compartirlos con otros servicios de Google. En Google Analytics 4, las direcciones IP se usan en el momento de la recogida y luego se descartan.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Datos Personales tratados: cantidad de usuarios, Datos de uso, estadísticas de sesión, Rastreadores.</li>
              <li>Lugar de tratamiento: Irlanda</li>
              <li>Duración de los Rastreadores: _ga: 2 años, _ga_*: 2 años</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Cómo controlar o borrar Cookies</h2>
          <p className="leading-relaxed">
            Los Usuarios pueden emplear la configuración de su propio navegador para:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Ver qué Cookies u otras tecnologías similares se han establecido en el dispositivo;</li>
            <li>Bloquear las Cookies o tecnologías similares;</li>
            <li>Eliminar las Cookies o tecnologías similares del navegador.</li>
          </ul>
          <p className="leading-relaxed text-sm mt-2">
            Los Usuarios podrán encontrar información sobre cómo gestionar las Cookies en los navegadores de uso más frecuente (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, etc.) en sus respectivos sitios de soporte.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Definiciones y referencias legales</h2>
          <div className="space-y-3">
            <div>
              <strong className="block text-foreground">Datos Personales (o Datos)</strong>
              <span className="text-sm">Constituye un dato personal cualquier información que, directa, indirectamente o en relación con otra información permita identificar a una persona física.</span>
            </div>
            <div>
              <strong className="block text-foreground">Datos de Uso</strong>
              <span className="text-sm">Las informaciones recogidas de forma automática por esta Aplicación (o por servicios de terceros utilizados por esta Aplicación).</span>
            </div>
            <div>
              <strong className="block text-foreground">Usuario</strong>
              <span className="text-sm">El individuo que utilice esta Aplicación, quien deberá coincidir con el Interesado.</span>
            </div>
            <div>
              <strong className="block text-foreground">Responsable del Tratamiento (o Titular)</strong>
              <span className="text-sm">La persona física o jurídica que determine las finalidades y las medidas del tratamiento de los Datos Personales.</span>
            </div>
            <div>
              <strong className="block text-foreground">Cookie y Rastreador</strong>
              <span className="text-sm">Las Cookies son Rastreadores que consisten en pequeñas cantidades de datos almacenados en el navegador del Usuario. Rastreador designa cualquier tecnología que permite rastrear a los Usuarios.</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
