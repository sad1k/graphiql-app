import prettier from 'prettier/standalone';
import parserBabel from 'prettier/plugins/babel';
import estreeParser from 'prettier/plugins/estree';

const formatCode = async (value: string) => {
  const formatedValue = await prettier.format(value, {
    parser: 'json',
    plugins: [parserBabel, estreeParser],
  });

  return formatedValue;
};

export default formatCode;
