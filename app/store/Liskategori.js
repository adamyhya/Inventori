Ext.define('Inventori.store.Liskategori', {
    extend: 'Ext.data.Store',
    storeId: 'liskategori',
    alias: 'store.liskategori',
    autoLoad: true,
    autoSync: true,
    fields: [
        'nomor', 'id_kategori', 'nama_kategori'
    ],


    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apikategori.php"
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
