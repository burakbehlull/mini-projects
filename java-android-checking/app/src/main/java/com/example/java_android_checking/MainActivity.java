package com.example.java_android_checking;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.view.View;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
	EditText editText1, editText2;
    Button button;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
		button = findViewById(R.id.button);
        editText1 = findViewById(R.id.editTextText);
        editText2 = findViewById(R.id.editTextText2);
    }
	
	public void Kontrol(View view){
        int sayi1, sayi2;
        sayi1 = Integer.parseInt(editText1.getText().toString());
        sayi2 = Integer.parseInt(editText2.getText().toString());


        if(sayi1 > sayi2){
            Toast.makeText(MainActivity.this, "1 sayı daha büyük", Toast.LENGTH_LONG).show();
        } else {
            Toast.makeText(MainActivity.this, "sayı küçük veya eşittir", Toast.LENGTH_LONG).show();
        }
    }

}