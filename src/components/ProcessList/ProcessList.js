import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { obterListaDeProcessos } from '../../services/apiService';

const ProcessList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await obterListaDeProcessos('user2@email.com', 'senha123', '63389487387');
        setData(response);
        console.log('data', data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); // A dependência vazia faz com que o useEffect rode apenas uma vez, equivalente a componentDidMount

  const columns = [
    {
      title: 'Número',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Data de Abertura',
      dataIndex: 'opening_date',
      key: 'opening_date',
    },
    {
      title: 'Nome do Processo',
      dataIndex: 'process_name',
      key: 'process_name',
    },
    {
      title: 'Status do Processo',
      dataIndex: 'status_process_name',
      key: 'status_process_name',
    },
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'CPF',
      dataIndex: 'cpf',
      key: 'cpf',
    },
  ];

  return (
    <Table
      dataSource={data}
      columns={columns}
      loading={loading}
      rowKey="number"
      // Adicione propriedades de paginação, filtro, etc., conforme necessário
    />
  );
};

export default ProcessList;
