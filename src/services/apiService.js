const apiBaseUrl = 'http://v2-homologacao-protocolo-unico.urbe.digital/api';

export const getToken = async (email, password) => {
    var url = `${apiBaseUrl}/login?email=${email}&password=${password}`;
    var formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao fazer login: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            return data.token;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Função para obter uma lista de processos com token no cabeçalho
export const obterListaDeProcessos = async (username, password, cpf) => {

    try {
        const token = await getToken(username, password);
        console.log('oioioioioioi', token);
        let formData = new FormData();
        formData.append("cpf", cpf);
        const response = await fetch(`${apiBaseUrl}/process/list?cpf=${cpf}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Erro ao obter a lista de processos');
        }

        const processos = await response.json();
        return processos;
    } catch (error) {
        console.error('Erro ao obter a lista de processos:', error);
        throw error;
    }
};