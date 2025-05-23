import Button from './Button'

function Contact() {
    const handleSubmit = () => {
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        }
        alert('Gracias por tu mensaje. Te contactaremos pronto.')
    }

    return (
        <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe 
              width="100%" 
              height="100%" 
              className="absolute inset-0" 
              frameBorder="0" 
              title="map" 
              marginHeight="0" 
              marginWidth="0" 
              scrolling="no" 
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Humberto+1º+680+Cordoba+Argentina&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">DIRECCIÓN</h2>
                <p className="mt-1">Humberto 1º 680, X5000 Córdoba, Argentina</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a href="mailto:marioezequielarce95@gmail.com" className="text-indigo-500 leading-relaxed">marioezequielarce95@gmail.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">LINKEDIN</h2>
                <a href="https://www.linkedin.com/in/marioarce95/" target="_blank" rel="noopener noreferrer" className="text-indigo-500 leading-relaxed">Mario Arce</a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contáctanos</h2>
            <p className="leading-relaxed mb-5 text-gray-600">¿Tienes alguna pregunta? Escríbenos y te responderemos a la brevedad.</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nombre</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Mensaje</label>
              <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <Button onClick={handleSubmit}>
              Enviar Mensaje
            </Button>
            <p className="text-xs text-gray-500 mt-3">Tu información está segura con nosotros. No compartimos datos con terceros.</p>
          </div>
        </div>
      </section>
    )
}

export default Contact;