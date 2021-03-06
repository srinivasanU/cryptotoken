# What is this?

Get your data Encrypted/Decrypted for your app

# Installation

`npm i tokencrypto --save`

Then...

```
import { tokenEncrypterAES , tokenDecrypterAES } from 'tokencrypto';

tokenEncrypterAES(Data , Secret key)
tokenDecrypterAES(Encrypted Data,Secret key used while encrypting)
```

# Options

Date Convertor supports these options:

* *tokenEncrypterAES* - _('hello','SECRET_KEY')_ 
* *tokenDecrypterAES* - _('Encrypted_data','SECRET_KEY')_