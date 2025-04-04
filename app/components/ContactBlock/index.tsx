import {JSX} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelopeCircleCheck} from '@fortawesome/free-solid-svg-icons';

export default function ContactBlock(): JSX.Element {
  return (
    <section className='py-12 px-4 bg-primary text-white lg:py-16'>
      <div className='md:w-2xl md:mx-auto lg:w-5xl lg:flex lg:justify-center'>
        <h3 className='uppercase mb-4 text-2xl md:text-4xl lg:text-right lg:mr-16'>
          Mantente en
          <span className='text-secondary font-bold block'>Contacto</span>
        </h3>
        <div className='lg:w-96'>
          <p className='mb-4 lg:text-lg'>
            Rellena nuestro formulario de newsletter, para recibir las últimas
            noticias.
          </p>
          <form action=''>
            <div className='flex items-center mb-4 justify-start'>
              <input
                className='bg-white text-black h-10 py-2 px-4 rounded-s-3xl w-4/5 shadow-[2px_2px_1px_rgba(0,0,0,0.25)] focus:outline-0 border-0 max-w-xs'
                type='email'
                name='email'
                id='email'
                placeholder='Introduce tu email'
                required
              />
              <button
                type='submit'
                className='bg-secondary flex justify-center items-center h-10 py-2 px-4 rounded-e-3xl w-1/5 shadow-[2px_2px_1px_rgba(0,0,0,0.25)] cursor-pointer'
              >
                <FontAwesomeIcon
                  icon={faEnvelopeCircleCheck}
                  className='text-white text-base w-8 block md:hidden'
                  size='lg'
                />
                <span className='hidden md:block uppercase font-bold'>
                  Enviar
                </span>
              </button>
            </div>
            <label htmlFor='privacy' className='flex items-center text-sm'>
              <input
                className='mr-1'
                type='checkbox'
                name='privacy'
                id='privacy'
              />
              He leído y acepto la política de&nbsp;
              <a href='#' className='underline'>
                privacidad
              </a>
            </label>
          </form>
        </div>
      </div>
    </section>
  );
}
