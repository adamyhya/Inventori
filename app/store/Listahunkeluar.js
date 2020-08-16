Ext.define('Inventori.store.Listahunkeluar', {
    extend: 'Ext.data.Store',
    storeId: 'listahunkeluar',
    alias: 'store.listahunkeluar',
    autoLoad: true,
    autoSync: true,
    fields: [
        'tahun'
    ],
    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apilaporan.php?action=2",
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
