Ext.define('Inventori.store.Listahunmasuk', {
    extend: 'Ext.data.Store',
    storeId: 'listahunmasuk',
    alias: 'store.listahunmasuk',
    autoLoad: true,
    autoSync: true,
    fields: [
        'tahun'
    ],
    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apilaporan.php?action=5",
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
