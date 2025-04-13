import React, { useState } from 'react';

function CepSearch() {
  const [cep, setCep] = useState('');      // Estado para armazenar o CEP
  const [address, setAddress] = useState(null); // Estado para armazenar o endereço
  const [loading, setLoading] = useState(false);  // Estado para verificar se a API está carregando

  // Função que vai ser chamada quando o botão for clicado
  const handleSearch = async () => {
    setLoading(true);  // Inicia o carregamento
    setAddress(null);  // Limpa o endereço anterior

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        alert('CEP não encontrado!');
      } else {
        setAddress(data);  // Atualiza o estado com os dados recebidos
      }
    } catch (error) {
      alert('Erro ao buscar o CEP!');
    }
    setLoading(false);  // Finaliza o carregamento
  };

  return (
    <div>
      <h2>Buscador de CEP</h2>
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}  // Atualiza o valor do CEP conforme o usuário digita
      />
      <button onClick={handleSearch} disabled={loading}>Buscar</button>

      {loading && <p>Carregando...</p>}

      {address && (
        <div>
          <h3>Endereço encontrado:</h3>
          <p><strong>Logradouro:</strong> {address.logradouro}</p>
          <p><strong>Bairro:</strong> {address.bairro}</p>
          <p><strong>Cidade:</strong> {address.localidade}</p>
          <p><strong>Estado:</strong> {address.uf}</p>
        </div>
      )}
    </div>
  );
}

export default CepSearch;