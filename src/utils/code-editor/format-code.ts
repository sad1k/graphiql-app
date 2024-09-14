import prettier from 'prettier/standalone';
import parserBabel from 'prettier/plugins/babel';
import estreeParser from 'prettier/plugins/estree';

const formatCode = async (value: string, setter: (value: string) => void) => {
  const formatedValue = await prettier.format(value, {
    parser: 'json',
    plugins: [parserBabel, estreeParser],
  });

  setter(formatedValue);
};

export default formatCode;
