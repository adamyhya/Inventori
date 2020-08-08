Ext.define('Inventori.store.Lisjurusan', {
    extend: 'Ext.data.Store',
    storeId: 'lisjurusan',
    alias: 'store.lisjurusan',
    autoLoad: true,
    autoSync: true,
    fields: [
        'nomor', 'id_jurusan', 'nama_jurusan'
    ],
    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apijurusan.php"
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
