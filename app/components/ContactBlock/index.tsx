import {JSX} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelopeCircleCheck} from '@fortawesome/free-solid-svg-icons';

export default function ContactBlock(): JSX.Element {
  return (
    <section className='py-12 px-4 bg-primary text-white'>
      <h3 className='uppercase'>
        Mantente en
        <span className='text-secondary font-bold block'>Contacto</span>
      </h3>
      <p className='mb-4'>
        Rellena nuestro formulario de newsletter, para recibir las últimas
        noticias.
      </p>
      <form action=''>
        <div className='flex justify-center items-center mb-4'>
          <input
            className='bg-white text-black h-10 py-2 px-4 rounded-s-3xl w-4/5 shadow-[2px_2px_1px_rgba(0,0,0,0.25)] focus:outline-0 border-0'
            type='email'
            name='email'
            id='email'
            placeholder='Introduce tu email'
            required
          />
          <button
            type='submit'
            className='bg-secondary flex justify-center items-center h-10 py-2 px-4 rounded-e-3xl w-1/5 shadow-[2px_2px_1px_rgba(0,0,0,0.25)]'
          >
            <FontAwesomeIcon
              icon={faEnvelopeCircleCheck}
              className='text-white text-base w-8 block md:hidden'
              size='lg'
            />
            <span className='hidden md:block'>Enviar</span>
          </button>
        </div>
        <label htmlFor='privacy' className='flex items-center'>
          <input className='mr-1' type='checkbox' name='privacy' id='privacy' />
          He leído y acepto la política de&nbsp;
          <a href='#' className='underline'>
            privacidad
          </a>
        </label>
      </form>
    </section>
  );
}
