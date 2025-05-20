// mock/languageData.ts

export interface UserLanguageData {
    languages: string[]; // lista dos idiomas selecionados
  }
  
  // Objeto interno que simula o "banco de dados" do usuário
  let userLanguageData: UserLanguageData = {
    languages: [], // começa vazio
  };
  
  export const LanguageAPI = {
    // Simula uma chamada GET para obter os idiomas
    getLanguages: async (): Promise<UserLanguageData> => {
      return new Promise(resolve => {
        setTimeout(() => resolve({ ...userLanguageData }), 500); // retorna uma cópia para evitar mutação direta
      });
    },
  
    // Simula uma chamada PUT/PATCH para atualizar os idiomas
    updateLanguages: async (languages: string[]): Promise<void> => {
      return new Promise(resolve => {
        setTimeout(() => {
          userLanguageData.languages = [...languages]; // atualiza com nova lista
          resolve();
        }, 500);
      });
    },
  };
  