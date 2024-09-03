'use client';

import { IRestClientForm } from '@/types/rest-client-form';
import { PropsWithChildren } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

const RestClientForm = ({ children }: PropsWithChildren) => {
  const { handleSubmit } = useForm<IRestClientForm>({});
  const onSubmit: SubmitHandler<IRestClientForm> = (data) => {
    console.log(data);
  };

  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>;
};

export default RestClientForm;
