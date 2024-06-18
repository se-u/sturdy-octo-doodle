# Panduan Pembuatan Komponen pada Folder `components`

Untuk menjaga konsistensi dan keteraturan dalam penulisan kode di dalam folder `components`, berikut adalah beberapa aturan yang wajib diikuti oleh semua developer dalam tim.

## Aturan Umum

1. **Penamaan Komponen**:

   - Setiap komponen harus menggunakan PascalCase.
   - Komponen harus ditulis dengan menggunakan deklarasi `function NamaComponent` dan bukan `const NamaComponent = () => ...`.

2. **Struktur Folder**:

   - Setiap halaman (`page`) harus memiliki folder dengan nama sesuai halaman tersebut. Contoh: `Login`.
   - Komponen yang lebih kecil yang menjadi bagian dari halaman atau komponen besar harus diletakkan dalam folder yang sesuai. Contoh: `InputField`.

3. **Contoh Penulisan Komponen**:
   - Do: `function NamaComponent() { ... }`
   - Don't: `const NamaComponent = () => { ... }`

## Contoh Struktur Folder

-src/
--components/
---Login/
----LoginForm.js
----InputField.js
---Dashboard/
----DashboardHeader.js
----DashboardContent.js

## Contoh Do and Don't

### Do

```javascript
// File: components/Login/LoginForm.js

import React from 'react';
import InputField from './InputField';

function LoginForm() {
  return (
    <form>
      <InputField label="Username" />
      <InputField label="Password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;

// File: components/Login/InputField.js

import React from 'react';

function InputField({ label, type = 'text' }) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} />
    </div>
  );
}

export default InputField;
```

### Don't

```javascript
// File: components/Login/LoginForm.js

import React from "react";
import InputField from "./InputField";

const LoginForm = () => {
  return (
    <form>
      <InputField label="Username" />
      <InputField label="Password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
```

```javascript
// File: components/Login/InputField.js

import React from "react";

const InputField = ({ label, type = "text" }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} />
    </div>
  );
};

export default InputField;
```
