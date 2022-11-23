# Tela de edição de empresa

[]{.draft}

Preencha os campos conforme necessário:

* [Plano de contas contábil](/accounting/accountChart){.field .required}
* [Região fiscal](/fiscal/fiscalRegion){.field .required}
* [Perfil fiscal de pessoa](/fiscal/fiscalProfilePerson){.field .required}
* [Moeda](financial/currency){.field .required}
* [Cluster](/material/stockCluster){.field .required}
* [Armazém padrão](/material/warehouse){.field .required}
* [Lista de preços de custo](/purchase/priceList/priceList.md){.field .required}
* [Imagem](/system/image.md){.field}
* [Certificado digital](/security/keyStore){.field .required}
* [BR, Sefaz, Ambiente]{.field .required} - define o ambiente para emissão de nota fiscal eletrônica, sendo: 1-Produção; 2-Homologação
* [BR, Sefaz, Informações adicionais para o fisco]{.field}
* [/catalog/company/company/fiscal/br/fiscal_br_CRT]{.field .required} - Indicação do Código de Regime Tributário sendo: 1-Simples Nacional; 3-Regime Normal
* [/catalog/company/company/fiscal_br_ICMS_SN_pCredSN]{.field} - define a alíquota para aproveitamento de crédito de ICMS para empresas do regime Simples Nacional, sendo que essa alíquota pode sofrer alteração todo mês de acordo com o faturamento do mês anterior
* [/catalog/company/company/purchase.properties.comments]{.field} - define uma observação padrão a ser impressa em todos os pedidos de compra
* [Tags](../../tags){.field}